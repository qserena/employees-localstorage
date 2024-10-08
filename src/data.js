import { nanoid } from 'nanoid'

let defaultEmployees = [
    {
        id: nanoid(),
        firstName: 'Bob',
        lastName: 'Gardner',
        email: 'bob@gardner.com',
        comments: 'Old man',
        isFriendly: true,
        birthYear: 1923,
        weight: 75,
        employmentStatus: 6,
        favoriteColor: 5,
    },
    {
        id: nanoid(),
        firstName: 'Samuel',
        lastName: 'Stoke',
        email: 'sam.stoke@dell.com',
        comments: 'No comments',
        isFriendly: true,
        birthYear: 1975,
        weight: 75,
        employmentStatus: 2,
        favoriteColor: 2,
    },
    {
        id: nanoid(),
        firstName: 'Greger',
        lastName: 'Schmell',
        email: 'gr@sch.de',
        comments: 'German hero.',
        isFriendly: false,
        birthYear: 2000,
        weight: 58.8,
        employmentStatus: 3,
        favoriteColor: 6,
    },
    {
        id: nanoid(),
        firstName: 'Brian',
        lastName: 'Studebaker',
        email: 'brian.studebaker@tesla.com',
        comments: 'Drives ten Teslas.',
        isFriendly: true,
        birthYear: 1977,
        weight: 90,
        employmentStatus: 3,
        favoriteColor: 3,
    },
    {
        id: nanoid(),
        firstName: 'Susan',
        lastName: 'Bergman',
        email: 'susan.bergman@csi.com',
        comments: 'No joke.',
        isFriendly: true,
        birthYear: 1988,
        weight: 50,
        employmentStatus: 2,
        favoriteColor: 1,
    },
]

export default defaultEmployees
