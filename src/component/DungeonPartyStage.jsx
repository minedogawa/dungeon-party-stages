import React from 'react';
import { stage as stages } from '../data/mock';

const StageResult = ({ chars }) => {

    const CalculateStats = () => {
        if (chars.length !== 4) return;

         // Calculate total stats of selected members
        const totalStats = selectedMembers.reduce((acc, member) => {
        acc.attack += member.attack;
        acc.defense += member.defense;
        acc.agility += member.agility;
        acc.accuracy += member.accuracy;
        acc.utility += member.utility;
        return acc;
      }, 
      { attack: 0, defense: 0, agility: 0, accuracy: 0, utility: 0 });   
    }

    const checkStage = () => {
        if (chars.length === 4) return [];

            const CalculateStats = totalStats();
            const victoryStages = [];
            for (let item of stage)
            if (
                (item.minimum_stats.attack === null || item.minimum_stats.attack < totalStats.attack) &&
                (item.minimum_stats.defense === null ||  item.minimum_stats.defense < totalStats.defense) &&
                (item.minimum_stats.agility === null ||  item.minimum_stats.agility < totalStats.agility) &&
                (item.minimum_stats.accuracy === null ||  item.minimum_stats.accuracy < totalStats.accuracy) &&
                (item.minimum_stats.utility === null ||  item.minimum_stats.utility < totalStats.utility)
                ) {
                  victoryStages.push(item.stage);
                }
            }
            return victoryStages

}