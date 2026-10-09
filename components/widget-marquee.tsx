import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee";

import Calendar01 from "@/registry/default/widgets/calendar/sm/calendar-01";
import Clock05 from "@/registry/default/widgets/clock/sm/clock-05";
import Sports02 from "@/registry/default/widgets/sports/sm/sports-02";
import Stocks01 from "@/registry/default/widgets/stocks/sm/stock-01";
import Weather07 from "@/registry/default/widgets/weather/sm/weather-07";
import Weather09 from "@/registry/default/widgets/weather/sm/weather-09";

const widgets = [
  <Calendar01 key="cal01" />,
  <Sports02 key="sport02" />,
  <Clock05 key="clock05" />,
  <Stocks01 key="stocks01" />,
  <Weather07 key="weather07" />,
  <Weather09 key="weather09" />,
]

const firstRow = widgets.slice(0, widgets.length / 2)
const secondRow = widgets.slice(widgets.length / 2)
const thirdRow = widgets.slice(widgets.length / 2, widgets.length)

const WidgetCard = ({
  widget,
}: {
  widget: React.ReactNode
}) => {
  return (
    <div className="shrink-0">
      {widget}
    </div>
  )
}

export function WidgetMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((widget, i) => (
          <WidgetCard key={i} widget={widget} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((widget, i) => (
          <WidgetCard key={i} widget={widget} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {thirdRow.map((widget, i) => (
          <WidgetCard key={i} widget={widget} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  )
}
