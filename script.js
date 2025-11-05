function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase for case-insensitive comparison
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    // Return the index of the first occurrence of s2 in s1
    // If not found, indexOf() automatically returns -1
    return s1.indexOf(s2);
} 

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
