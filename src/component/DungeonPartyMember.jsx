import React from 'react'


function DungeonPartyMember({ characterData, changeColor, handleClick }){


    return (
    <div className='flex flex-wrap gap-6 justify-center' onClick={() => handleClick(characterData)}>
        <div className="flex justify-center">
            <div className="w-full rounded-3xl inline-block overflow-hidden shadow-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300">
              <div className="relative group w-full overflow-hidden bg-white rounded-t-3xl">
                  <img src={characterData.image} className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" />
              </div>
         <div className={changeColor(characterData.name)}>
                  <div className="text-center px-3 py-2">
                    <h1 className="font-bold text-2xl mb-2">{characterData.name}</h1>
             </div>
            <div className="flex justify-center pb-3 text-sm">
                <div className="text-center px-1 border-r last:border-r-0">
                    <h2>ATK</h2>
                    <span>{characterData.attack}</span>
                </div>
                <div className="text-center border-r px-2 last:border-r-0">
                    <h2>DEF</h2>
                    <span>{characterData.defense}</span>
                </div>
                <div className="text-center border-r px-2 last:border-r-0">
                    <h2>AGI</h2>
                    <span>{characterData.agility}</span>
                </div>
                <div className="text-center border-r px-2 last:border-r-0">
                    <h2>ACU</h2>
                    <span>{characterData.accuracy}</span>
                </div>
                <div className="text-center border-r px-2 last:border-r-0">
                    <h2>UTI</h2>
                    <span>{characterData.utility}</span>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default DungeonPartyMember;