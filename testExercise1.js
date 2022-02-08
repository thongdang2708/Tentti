// let i = 4;
// let dayso = [0,1,1,0,0,0];
// i-=1;

// let number = '';
// if (i != 0) {
//     number += 1;
//     console.log(number);
// } else if (i===0) {
//     console.log('Hard');
// } else if (i<0) {
//     process.exit();
// }

// if (parseInt(number) === dayso[0] & parseInt(number) === 1) {
//         console.log('Trung');
//         dayso.splice(dayso[0],1);
// } else if (parseInt(number) === dayso[0] & parseInt(number) === 0) {
//         console.log('Fail');
//         dayso.splice(dayso[0],1);
// } else if (parseInt(number) != dayso[0]) {
//         console.log('Fail');
//         dayso.splice(dayso[0],1);
// }

// console.log(dayso);

// class button {
//     constructor() {
//         this.attack = 4;
//     }

//     button () {
//         this.attack -= 1;

//         let number = ''
//         if (this.attack != 0) {
//             number += (Math.floor(Math.random()*1))
//             console.log(number);
//             console.log(`${this.attack}`)
//         } else if (this.attack === 0) {
//             console.log('game over');
//         }
//     }
// }

// let game1 = new button();
// let game2 = new button();
// game1.button();
// game2.button();

// let ak = 10;
// let a =  0;
// let newObject = [];
// let object = [0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1]

// let newNumber = '';
// if (object[0] === a) {
//     console.log('Trung')
//     ak -= 2;
//     console.log(ak);
//     object.shift();
//     console.log(object);
// } else {
//     console.log('Trat');
// }

// if (ak === 0) {
//     console.log('break');
// }

// class button {
//     constructor(point) {
//         this.point = point;
//         this.number = 4
//     } 

//     button () {
       
//     }
// }
//Math.floor(Math.random()*3)
// let button = new button();

// class Button {
//     constructor () {
//         this.object = [0,1,1,1,0,1,2,1,1,1,1,0,2,1,2,2,1,0,1,0];
//         this.ratpoints = 2;
//     }

//     actionPlayer (player) {
//         this.player = player;

//         this.points -= 1;

//         if (this.object[0] === 0) {
//             this.object.splice(0,2);
//             console.log(this.object);
//             console.log('trat');
//             console.log(this.points);
//         } else if (this.object[0] === 1) {
//             this.object.splice(0,2);
//             console.log(this.object);
//             console.log('trat');
//             console.log(this.points);
//         } else if (this.object[0] === 2) {
//             this.object.splice(0,2);
//             console.log(this.object);
//             console.log('trung');
//             console.log(this.points);
//             console.log('You kill Rat');
//         } 

//         if (this.number === 0) 
//             process.exit();
//         }
// }

// class player {
    
// }

// let playerone = new player ();
// let playertwo = new player ();
// let playerthree = new player();
// let playerfour = new player();
// let playerfive = new player();
// let playersix = new player();
// let playerseven = new player();
// let turnone = new Button;

// turnone.actionPlayer(playerone);
// turnone.actionPlayer(playertwo);
// turnone.actionPlayer(playerthree);


const prompts = require('prompts');

async function DungeonEntrance() {

    const initialActionChoices = [
        { title: 'Look around', value: 'Look Around' },
        { title: 'Go to Room', value: 'Go To Room' },
        { title: 'Attack', value: 'Attack'},
        { title: 'Exit game', value: 'Exit'}
    ];

    const response = await prompts({
      type: 'select',
      name: 'value',
      message: 'Choose your action',
      choices: initialActionChoices,
    });

        if (response.value === 'Look Around') {
          TheDungeonEntrance();
          DungeonEntrance();
        } else if (response.value === 'Go To Room') {
          DirectionToHallway();
        } else if (response.value === 'Attack') {

        } else if (response.value === 'Exit') {
          ExitRoom();
        }

}
    
function ExitRoom() {
    console.log('Exit room');
}
    


function TheDungeonEntrance () {
    

    console.log('You look around \nYou are in The dungeon and it is a big and damp room with broken statues all around\n\nThere are doorways leading to: Hallway')
}

async function DirectionToHallway () {
  let vastaus = await prompts({
    type: 'select',
    name: 'value',
    message: 'Which room you want to go to?',
    choices: [{title: 'Hallway', value: 'Hallway'}],
  })
  
  console.log('You move to HallWay');
    console.log('------------------')
    console.log('You are in Hallway and it is a long and dark hallway with dark pools of water on the floor and some fungus growing on the walls\n')
    console.log('There are doorways leading to:');
    console.log('The Dungeon');
    console.log('Chamber');
    rat.attackPlayerFromRat(player);

  if (vastaus.value === 'Hallway') {
    HallWayArea();
    
  }
  

}

async function HallWayArea() {
    let initialChoices = [{title: 'Look around', value: 'Look Around' },
    { title: 'Go to Room', value: 'Go To Room' },
    { title: 'Attack', value: 'Attack'},
    { title: 'Exit game', value: 'Exit'}];

    let response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Choose your action',
        choices: initialChoices
    })

    console.log('You look around');
    console.log('You are in Hallway and it is a long and dark hallway with dark pools of water on the floor and some fungus growing on the walls');

    console.log('There are doorways leading to:')
    console.log('The dungeon');
    console.log('Chamber');

    if (response.value === 'Go To Room') {
        newDirectionOrBackFromHallWay();
    } else if (response.value === 'Attack') {
        attackSelection();
        // player.attackInHallWay(rat);
        // HallWayArea();
    } else if (response.value ==='Look Around') {
        // console.log('You look around');
        // console.log('You are in Hallway and it is a long and dark hallway with dark pools of water on the floor and some fungus growing on the walls');
    
        // console.log('There are doorways leading to:')
        // console.log('The dungeon');
        // console.log('Chamber');
        
        rat.attackPlayerFromRat(player);
        HallWayArea();
       
    }
}

function showNotification () {
    console.log('You look around');
    console.log('You are in Hallway and it is a long and dark hallway with dark pools of water on the floor and some fungus growing on the walls');

    console.log('There are doorways leading to:')
    console.log('The dungeon');
    console.log('Chamber');
}

async function newDirectionOrBackFromHallWay () {
      let initialChoices = [{
        title: 'The Dungeon', value: 'The Dungeon Entrance'},
        {title: 'Chamber', value: 'Chamber'}
      ];
      let response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Choose your action',
        choices: initialChoices
      })

      if (response.value === 'The Dungeon Entrance') {
        DungeonEntrance()
      } else {
        toChamber();
      }
}

async function attackSelection () {
    let enemySelection = [{
        title: 'Small Sewer Rat', value: 'Rat'
    }]

    let response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Which enemy you want to attack?',
        choices: enemySelection,
    })

    if (response.value === 'Rat') {
        player.attackInHallWay(rat);
        HallWayArea();
    }

    
}



async function directionToChamber () {
    let initialChoices = [{title: 'Look around', value: 'Look Around' },
    { title: 'Go to Room', value: 'Go To Room' },
    { title: 'Attack', value: 'Attack'},
    { title: 'Exit game', value: 'Exit'}];

    let response = await prompts({
        type: 'select',
        name: 'value',
        message: 'Choose your action',
        choices: initialChoices
    })
}

process.stdout.write('\033c'); // clear screen on windows

console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!')
console.log('================================================')
console.log('You walk down the stairs to the dungeons')
DungeonEntrance();


class Character {
    constructor(name) {
        this.name = name;
        this.hit_point = 10;
        this.player_shotchance = [1,1,1,0];
        this.rat_hit_point = 2;
        this.dragon_hit_point = 4;
    }

    attackInHallWay (rat) {

        let randomIndex = Math.floor(Math.random()*this.player_shotchance.length);
        let shots = this.player_shotchance[randomIndex];

        for (let ft=0; ft<this.player_shotchance.length;ft++) {
                if (ft === randomIndex & this.player_shotchance[ft] === 0) {
                    console.log('Trat');
                    this.player_shotchance.splice(ft,1);
                    // console.log(this.player_shotchance);
                } else if (ft === randomIndex & this.player_shotchance[ft] === 1) {
                    console.log('Trung');
                    this.rat_hit_point -= 2; 
                    this.player_shotchance.splice(ft,1);
                    // console.log(this.player_shotchance);
                    if (this.rat_hit_point === 0) {
                        console.log("Rat is dead")
                    }
                } 

        }
       

        
        }
    
       attackInChamber(dragon) {

       }
        

        
}


class Enemies extends Character {
    constructor(name,hit_point,rat_hit_point,dragon_hit_point) {
        super(name,hit_point,rat_hit_point,dragon_hit_point);
        this.rat_shotchance = [0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0];
        this.dragon_shotchance = [1,1,1,1,1,1,1,1,1,0]
    }

    attackPlayerFromRat (player) {
        
        let randomIndex = Math.floor(Math.random()*this.rat_shotchance.length);
        let shots = this.rat_shotchance[randomIndex];

        for (let zg=0;zg<this.rat_shotchance.length;zg++) {
            if (zg === randomIndex & this.rat_shotchance[zg]===0) {
                console.log('You see a Small Sewer Rat');
                console.log('Small sewer rat attacks Player with its Sharp teeths');
                console.log('Small sewer rat hits Player with 1 points');
                console.log('Small sewer rat attack misses')
                this.rat_shotchance.splice(zg,1);
                console.log(this.rat_shotchance);
            } else if (zg === randomIndex & this.rat_shotchance[zg]=== 1) {
                console.log('You see a Small Sewer Rat');
                console.log('Small sewer rat hits Player with 1 point');
                this.hit_point -= 1;
                console.log(`Player is hit and has ${this.hit_point} hitpoints remaining`);
                this.rat_shotchance.splice(zg,1);
                console.log(this.rat_shotchance);
                if (this.hit_point === 0) {
                    console.log('Player is dead.Game over!');
                    process.exit();
                }
            } 
        }
        
      

    }


}

let player = new Character('Player');
let rat = new Enemies('rat');
let dragon = new Enemies('dragon')
// player.attackInHallWay(rat);
// rat.attackPlayerFromRat(player);






































