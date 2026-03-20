import Actions from "@/components/actions";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Timeline, TimelineCard } from "@/components/timeline";
import { getTimeline } from "@/utils/timeline";


export default function Page() {

  const timeline = getTimeline();

  return (
    <>
      <main className="w-full max-w-2xl space-y-8 md:p-12 p-4">
        <Header />
        <Actions />
        {/* timeline */}
        <Timeline>
          {
            timeline.map(item => {
              return <TimelineCard item={item} key={item.id} />
            })
          }
        </Timeline>
      </main>
      <Footer />
    </>
  )
}
