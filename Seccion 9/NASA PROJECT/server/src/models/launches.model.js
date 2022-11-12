
const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    mission: 'first name exploration',
    rocket: 'Expolerer name',
    launchDate: new Date('December 27, 2030'),
    target: 'kepler-422 b',
    flightNumber: 100,
    customers: ['ZTM','NASA','APLAPLAC'],
    upcoming: true,
    sucess: true,
};



launches.set(launch.flightNumber, launch);


function getAllLaunches() {
    return Array.from(launches.values());
}


//Se crea esta función para agregar nuevos launches a la API. 
function addNewLunch(launch) {
    latestFlightNumber++;
    //Se setea el número de vuelo +1
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customers: ['Zero To Mastery', 'NASA'],
            upcoming: true,
            success: true,

        })
    );
}
module.exports = {
    getAllLaunches,
    addNewLunch,
}