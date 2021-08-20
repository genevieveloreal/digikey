/*
          This file (db.js) is added to your codebase if you chose "None" for your
          database provider, but some of you components attempt to import db.js. 
          Rather than break your site, we include this file and just return dummy data
          when methods like useUser and createUser are used. To entirely remove auth from your 
          codebase search for "db.js" and remove all related code.
        */

/**** USERS ****/

// Fetch user data (hook)
// This is called automatically by auth.js and merged into auth.user
export function useUser(uid) {
  return Promise.resolve({
    data: {
      uid: 1,
      email: "fake-user@gmail.com",
    },
    isLoading: false,
    error: null,
  });
}

// Create a new user
export function createUser(uid, data) {
  return Promise.resolve(true);
}

// Update an existing user
export function updateUser(uid, data) {
  return Promise.resolve(true);
}

/**** ITEMS ****/
/* Example query functions (modify to your needs) */

// Fetch item data (hook)
export function useItem(id) {
  return Promise.resolve({
    data: {
      id: 2,
      name: "fake item",
    },
    isLoading: false,
    error: null,
  });
}

// Fetch all items by owner (hook)
export function useItemsByOwner(owner) {
  return Promise.resolve({
    data: {
      uid: 3,
      email: "fake-user@gmail.com",
    },
    isLoading: false,
    error: null,
  });
}

// Create a new item
export function createItem(data) {
  return Promise.resolve(true);
}

// Update an item
export function updateItem(id, data) {
  return Promise.resolve(true);
}

// Delete an item
export function deleteItem(id) {
  return Promise.resolve(true);
}
