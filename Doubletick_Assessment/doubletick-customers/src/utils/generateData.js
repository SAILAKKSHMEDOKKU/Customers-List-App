import avatar from '../assets/test_user-3 3.svg'; 


// Utility to generate random data for 1 million customers
export function generateCustomers(count = 1000000) {
  const customers = [];
  const firstNames = ["Sai", "Lakshmi", "Kiran", "Ravi", "Meena", "Anjali", "Teja", "Rahul", "Sita", "Kumar"];
  const lastNames = ["Reddy", "Naidu", "Patel", "Sharma", "Gupta", "Iyer", "Kaur", "Das", "Verma", "Nair"];
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const addedByList = ["Rahul", "Swapna", "Karthikeya", "Sweccha"]; 

  for (let i = 1; i <= count; i++) {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${first} ${last}`;
    const email = `${first.toLowerCase()}.${last.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
    const phone = `+91${Math.floor(6000000000 + Math.random() * 3999999999)}`;
    const score = Math.floor(Math.random() * 100);
    const addedBy = addedByList[Math.floor(Math.random() * addedByList.length)];
    const lastMessageAt = new Date(Date.now() - Math.random() * 1e10).toISOString();

    // Prepend a small user emoji before the "addedBy" name
    const addedByWithIcon = `👤 ${addedBy}`;

    customers.push({ id: i, name, email, phone, score, lastMessageAt, addedBy: addedByWithIcon, avatar });
  }

  return customers;
}
