
const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'first name exploration',
    Rocket: 'Expolerer name',
    launchDate: new Date('December 27, 2030'),
    destination: 'kepler-422 b',
    customer: ['ZTM','NASA','APLAPLAC'],
    upcoming: true,
    sucess: true,
};



launches.set(launch.flightNumber, launch);


function getAllLaunches() {
    return Array.from(launches.values());
}

module.exports = {
    getAllLaunches,
}