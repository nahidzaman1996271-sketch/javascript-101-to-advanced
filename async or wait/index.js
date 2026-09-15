function walkDog() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You walked the dog");
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You cleaned the kitchen");
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("You took out the trash");
        }, 1000);
    });
}

async function doChores() {

    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores");
}

doChores();