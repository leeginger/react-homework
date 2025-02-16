const newUserList = [
    {
        id:1,
        title:'Lelah Nichols',
        description:'Troy, MI',
        tag:['clothes', 'stem'],
    },
    {
        id:2,
        title:'Jesus Weiss',
        description:'Fort Worth, TX',
        tag:['headset', 'gadget'],
    },
    {
        id:3,
        title:'Annie Rice',
        description:'Austin, TX',
        tag:['road', 'mountain', 'trip'],
    },
    {
        id:4,
        title:'Robert Brower',
        description:'Cincinnati, OH',
        tag:['Maintenance', 'gears','frames','repair'],
    },
    {
        id:5,
        title:'Amy Campbell',
        description:'Warrior, AL',
        tag:['music', 'disks'],
    },
    {
        id:6,
        title:'Anthony S. Morin',
        description:'Lyndhurst, NJ',
        tag:['vintage', 'electric'],
    }
];

export default newUserList;
export type NewUserList = typeof newUserList;
export type NewUseritem = NewUserList[number]