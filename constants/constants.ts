import { Expenditure, IDProps, IconsType } from "@/Types/Types";

export const sections = ["Inbox", "Settings", "Payments", "Cards", "Travel"];

export const id: IDProps[] = [
  {
    title: "The Card is just the start",
    description:
      "Everything you need to control spend and optimize finance operations, all on a single platform.",
    image: "/HomeCard.webp",
  },
  {
    title: "Global Corporate Card",
    description:
      "Control your spend globally with unlimited cards and full visibility",
    image: "/mobile.webp",
  },
  {
    title: "Expense Management",
    description:
      "Automate expense reporting and control employee expenses at scale",
    image: "/rsvp.webp",
  },
  {
    title: "Accounting automation",
    description:
      "Stay compliant, eliminate errors, and close your books faster.",
    image: "/restate.webp",
  },
  {
    title: "Accounts Payable",
    description:
      "Pay bills faster with automated approvals, anywhere you spend",
    image: "/restate.webp",
  },
];

export const data = [
  { label: "Cashback", value: 181.45, color: "bg-blue-500" },
  { label: "Number of trips", value: 3, color: "bg-green-500" },
  { label: "Average trip cost", value: 1360.26, color: "bg-yellow-500" },
  { label: "Biggest trip", value: 2207.48, color: "bg-red-500" },
];

export const icons: IconsType[] = [
  {
    icon: "/icon-1.svg",
    description: "Set spend controls and empower employees",
  },
  {
    icon: "/icon-2.svg",
    description: "Simplify payments and increase efficiency",
  },
  {
    icon: "/icon-3.svg",
    description: "Automate accounting tasks and close faster",
  },
  {
    icon: "/icon-4.svg",
    description: "Get valuable insights and maximize every dollar",
  },
];

export const cards = [
  { name: "OneBiteBig", holder: "Liddy Dione", utilization: "0%" },
  { name: "Elsie", holder: "James Smith", utilization: "0%" },
  { name: "Education Stipend", holder: "Linda Davis", utilization: "0%" },
  { name: "Romantic (Temporary)", holder: "Linda Davis", utilization: "0%" },
  { name: "Harold A", holder: "Lenny Dione", utilization: "0%" },
  { name: "Mark Goldberger", holder: "Linda Davis", utilization: "0%" },
  { name: "Heavy Metal Card", holder: "Lenny Dione", utilization: "0%" },
  { name: "Jacob Schwartz", holder: "James Smith", utilization: "0%" },
  { name: "Cory Greenberg", holder: "James Smith", utilization: "0%" },
  { name: "Transportation", holder: "Linda Davis", utilization: "0%" },
];

export const expenditures: Expenditure[] = [
  { category: "Groceries", amounts: [200, 450, 700, 2250, 3200] },
  { category: "Rent", amounts: [3000, 4050, 5100, 6150, 7200] },
  { category: "Entertainment", amounts: [2150, 3200, 4250, 5300, 5350] },
  { category: "Transportation", amounts: [150, 300, 450, 600, 750] },
  { category: "Utilities", amounts: [100, 200, 300, 400, 500] },
];
