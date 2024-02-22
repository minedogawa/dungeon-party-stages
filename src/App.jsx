/* eslint-disable react/no-unescaped-entities */
import './App.css';
import React, { useState } from 'react';
import DungeonPartyMember from './component/DungeonPartyMember.jsx';
import PartyList from './component/PartyList.jsx';
import { character, stage } from './data/mock';

function App() {
  const [selectedMembers, setSelectedMembers] = useState([]);

  // view party members
  const partyMembersData = character.map(member => ({
    image: member.image,
    name: member.class.charAt(0).toUpperCase() + member.class.slice(1),
    attack: member.attack,
    defense: member.defense,
    agility: member.agility,
    accuracy: member.accuracy,
    utility: member.utility,
  }));

  // Calculate total stats of selected members
  const totalStats = selectedMembers.reduce((acc, member) => {
    acc.attack += member.attack;
    acc.defense += member.defense;
    acc.agility += member.agility;
    acc.accuracy += member.accuracy;
    acc.utility += member.utility;
    return acc;
  }, { attack: 0, defense: 0, agility: 0, accuracy: 0, utility: 0 });

  // Determine if the party is complete
  const isPartyComplete = selectedMembers.length === 4;

  // Function to handle click on DungeonPartyMember
  const handleMemberClick = (partyMember) => {
    if (selectedMembers.find(member => member.name === partyMember.name)){
      setSelectedMembers(selectedMembers.filter(member => member.name!== partyMember.name));
    } else{
      if(selectedMembers.length === 4){
        selectedMembers.shift();
      }
      const newSelectedMembers = [...selectedMembers, partyMember];
      setSelectedMembers(newSelectedMembers);
    }
  };

   
  const changeColor = (name) => {
    if (selectedMembers.find(member => member.name === name)) {
      return "bg-blue-900 text-white";
    } else {
      return "bg-white";
    }
}


  return (
    <div className='my-14'>
       <div className="flex flex-wrap gap-6 justify-center mt-8">
            {partyMembersData.map ((member, index) =>(
              <DungeonPartyMember key={index} characterData={member} changeColor={changeColor} handleClick={handleMemberClick} />
            ))}
        </div>
      <div className="flex justify-center my-8">
            <div className='p-8 bg-white text-2xl text-center w-3/4 rounded-3xl'>
            {isPartyComplete ? (
                 <span>
                 Your have total stats of <br/>
                 Atk {totalStats.attack}, Def {totalStats.defense}, Agi {totalStats.agility}, Acu {totalStats.accuracy}, and Uti {totalStats.utility}
                   {/* <p className='mt-6'>Your Party through Forest Of Trial</p>
                   <p className='mt-6'>Your Party can't pass any stage.</p> */}
                  </span>
                  ) : 
                  ( <div className='p-8 bg-white text-2xl text-center w-3/4 rounded-3xl mt-4'>
                    <span>
                      Your Party Summary will be here! <br/>
                      It will show when your party is complete
                    </span>
                  </div>
                )}
              </div>
          </div>
      </div>
  )
}

export default App;
