import { nanoid } from 'nanoid'

let defaultEmployees = [
    {
        id: nanoid(),
        firstName: 'Tom',
        lastName: 'Serenander',
        email: 'tom@serenander.se',
        comments: 'No',
        isFriendly: true,
        birthYear: 1965,
        weight: 73,
        employmentStatus: 2,
        favoriteColor: 3,
    },
    {
        id: nanoid(),
        firstName: 'Jan',
        lastName: 'Banan',
        email: 'jan@banan.se',
        comments: 'Yes',
        isFriendly: false,
        birthYear: 2015,
        weight: 34,
        employmentStatus: 1,
        favoriteColor: 2,
    },
]

export default defaultEmployees
