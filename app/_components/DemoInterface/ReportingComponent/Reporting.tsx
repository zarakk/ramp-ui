import BarGraphSingle from "./components/BarGraphSingle";
import { Card } from "./components/Card";

export default function Reporting() {
  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        <h2 className="text-sm py-2">Insights</h2>

        <h2 className="text-3xl font-bold border-b-2 border-gray-200 pb-4">
          Reporting
        </h2>
        <h2 className=" text-sm p-2 pl-0">Total Balance</h2>

        <p className="text-2xl">$1,572.41</p>
        <BarGraphSingle />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <Card
          title="Partner reward found"
          description="You're eligible for rewards from Densite - leverage them to increase your income!"
        />
        <Card
          title="Lower pricing plan found"
          description="We've identified potential cost savings by switching your plan - review your options!"
        />
        <Card
          title="Duplicate subscription!"
          description="Having two subscriptions to one service? We've detected many cases like yours - let's fix that!"
        />
        <Card
          title="Duplicate subscription?"
          description="You're subscribed at premium tier at Audible! Save money by downgrading it as Amazon Prime Subscription includes it too!"
        />
      </div>
    </div>
  );
}
