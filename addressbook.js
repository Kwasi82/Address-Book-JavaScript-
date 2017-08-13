var kwasi = {
    firstName: "Kwasi Adutwum",
    lastName: "Asiedu",
    telephoneNo: "08084651232",
    email: "kwasi@email.com"
};

var kwadwo = {
    firstName: "Kwadwo Amankwah",
    lastName: "Asiedu",
    telephoneNo: "08085551111",
    email: "kwadwo@email.com"
};

var bookContacts = new Array(kwasi, kwadwo);

// console.log("The first contact in the address book is " + bookContacts[0].firstName);

var displayContact = function(contact) {
    alert(contact.firstName + " " + contact.lastName);
}

var listContact = function() {
    var numberContacts = bookContacts.length;
    for(i=0; i < numberContacts; i++) {
        displayContact(bookContacts[i]);
    };
}

var searchTel = function(telNo) {
    var numberContacts = bookContacts.length;
    for(i=0; i < numberContacts; i++) {
        if(telNo === bookContacts[i].telephoneNo) {
            displayContact(bookContacts[i]);
        }
    }
}

searchTel("08085551111");