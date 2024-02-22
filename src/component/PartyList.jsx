import React from 'react';
import DungeonPartyMember from './DungeonPartyMember';

const PartyList = ({ partyMembers }) => {
  return (
    <div>
      <header>
        <h1 className="text-6xl text-center my-12">DUNGEON PARTY</h1>
      </header>
      <div className='flex flex-wrap gap-6 justify-center'>
        {partyMembers.map((member, index) => (
          <DungeonPartyMember key={index} characterData={member} />
        ))}
      </div>
    </div>
  );
}

export default PartyList;

