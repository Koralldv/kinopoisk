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
        amount: 14323,
        title: 'Фильмов',
    },
    {
        сomp: IoEyeOutline,
        amount: 120,
        title: 'Передач',
    },
    {
        сomp: IoPeopleCircleOutline,
        amount: 64415,
        title: 'Пользователей',
    },
    {
        сomp: IoTrophyOutline,
        amount: 41,
        title: 'Наград',
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
