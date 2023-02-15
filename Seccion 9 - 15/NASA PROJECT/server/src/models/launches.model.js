const launchesDatabase = require('./launches.mongo');
const planets = require('./planets.mongo');

const DEFAULT_FLIGHT_NUMBER = 100;
const launches = new Map();


const launch = {
    mission: 'first name exploration',
    rocket: 'Explorer name',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-296 A f',
    flightNumber: 100,
    customers: ['ZTM','NASA','APLAPLAC'],
    upcoming: true,
    success: true,
};

saveLaunch(launch);



function existsLaunchWithId(launchId) {
    return launches.has(launchId);
}


async function getLatestFlightNumber() {
    const latestLaunch = await launchesDatabase
        .findOne()
        .sort('-flightNumber');
    
    if (!latestLaunch) {
        return DEFAULT_FLIGHT_NUMBER;
    }

    return latestLaunch.flightNumber;
}

async function getAllLaunches() {
    return await launchesDatabase
        .find({}, { '_id': 0, '__v': 0,})
}

async function saveLaunch(launch) {
    const planet = await planets.findOne({
        keplerName: launch.target, 
    });

    if (!planet) {
        throw new Error('No matching planets found')
    }

    await launchesDatabase.findOneAndUpdate({
        flightNumber: launch.flightNumber, 
    }, launch, {
        upsert: true, 
    });
}

async function scheduledNewLaunch(launch) {
    const newFlightNumber = await getLatestFlightNumber() + 1;
    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customers: ['Zero To Mastery', 'NASA'],
        flightNumber: newFlightNumber,
    });

    await saveLaunch(newLaunch);


}


function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted; 
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    scheduledNewLaunch,
    abortLaunchById,
}