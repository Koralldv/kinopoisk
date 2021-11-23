import React from 'react';

import { Statistics } from '../components/Statistics';
import { Join } from '../components/Join';
import { Team } from '../components/Team';
import {
    IoVideocamOutline,
    IoPeopleCircleOutline,
    IoEyeOutline,
    IoTrophyOutline,
} from 'react-icons/io5';

const stats = [
    {
        сomp: IoVideocamOutline,
        amount: 12,
        title: 'Movies',
    },
    {
        сomp: IoEyeOutline,
        amount: 55,
        title: 'Shows',
    },
    {
        сomp: IoPeopleCircleOutline,
        amount: 359,
        title: 'Members',
    },
    {
        сomp: IoTrophyOutline,
        amount: 246,
        title: 'Awards',
    },
];

export const About = () => {
    return (
        <>
            <Statistics stats={stats} />
            <Join />
            <Team />
        </>
    );
};
