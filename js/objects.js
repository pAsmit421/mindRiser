let users = [
    {
        name: 'sita',
        phone: '98686228258',
        address: 'patan',
        ward: '-10'
    },
    {
        name: 'ram',
        phone: '98686228258',
        address: 'patan',
        ward: '-10'
    },
    {
        name: 'ravan',
        phone: '98686228258',
        address: 'patan',
        ward: '-10'
    }
];

// Log the address of each user
users.forEach(user => console.log("User address:", user.address));

// Update the address of each user
users.forEach(user => user.address = "Pimbahal");

// Log the updated address of each user
users.forEach(user => console.log("Updated user address:", user.address));

// Further update the address of each user
users.forEach(user => user.address = "Gabahal");

// Log the further updated address of each user
users.forEach(user => console.log("Further updated user address:", user.address));

// Change ward from '-10' to '10'
users.forEach(user => user.ward = user.ward.replace('-10', '10'));

// Log the updated ward of each user
users.forEach(user => console.log("Updated user ward:", user.ward));
