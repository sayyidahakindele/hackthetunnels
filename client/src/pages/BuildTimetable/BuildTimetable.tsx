import { Central as Layout } from "@/layouts";
import { Section } from "./Section";
import { SearchSection } from "./SearchSection";
import { ResultsSection } from "./ResultsSection";
import { TimetableSection } from "./TimetableSection";
import { useState } from "react";
import { ServiceAPI } from "@/infrastructure";
import { ScheduledEvent } from "@/infrastructure/ServiceAPI";
import { WorksheetSection } from "./WorksheetSection";
import { useAccountContext } from "@/context";
import { useNavigate } from "react-router-dom";
import { scheduledEventToCalendarBlock } from "@/utils";
import "./BuildTimetable.style.scss";

function BuildTimetable() {
  const { jwt } = useAccountContext();
  const [searchValue, setSearchValue] = useState(''); 
  const [scheduledEvents, setScheduledEvents] = useState<ScheduledEvent[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<ScheduledEvent[]>([]);
  const navigate = useNavigate();
  const [ttName, setTTName] = useState('');

  // Fetch scheduled events based on the program input
  const fetchScheduledEvents = async (program: string) => {
    try {
      const result = await ServiceAPI.fetchScheduledEvents(program);
      setScheduledEvents(result);
    } catch (error) {
      console.error('Error fetching scheduled events:', error);
    }
  };

  const createTimetable = async () => {
    try {
      const result = await ServiceAPI.createTimetable(
        ttName,
        selectedEvents.map((event) => event.id.toString()),
        jwt,
      );
      navigate(`/timetables/${result.data.id}`);
    } catch (error) {
      console.error('Error creating timetable:', error);
    }
  };

  const addEvent = (event: ScheduledEvent) => {
    setSelectedEvents((prevSelected) => [...prevSelected, event]);
  };

  const removeEvent = (event: ScheduledEvent) => {
    setSelectedEvents((prevSelected) => prevSelected.filter((e) => e.id !== event.id));
  };

  return (
    <Layout title={"My Course Worksheet"}>
      <div className="BuildTimetable">
        <Section title="Search">
          <SearchSection 
            onSearch={fetchScheduledEvents} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
          />
        </Section>

        {scheduledEvents.length > 0 && (
          <Section title="Results">
            <ResultsSection
              scheduledEvents={scheduledEvents}
              addEvent={addEvent}
            />
          </Section>
        )}

        {selectedEvents.length > 0 && (
          <Section title="Worksheet">
            <WorksheetSection
              selectedEvents={selectedEvents}
              removeEvent={removeEvent}
              createTimetable={createTimetable}
            />
            <p>Name your timetable</p>
            <input 
              type="text" 
              onChange={event => setTTName(event.target.value)} 
              value={ttName} // Ensure controlled input
            />
            <button onClick={createTimetable}>
              Create Timetable
            </button>
          </Section>
        )}

        <Section title="Draft Timetable">
          <TimetableSection
            selectedEvents={selectedEvents.map((event: ScheduledEvent) =>
              scheduledEventToCalendarBlock(event),
            )}
          />
        </Section>
      </div>
    </Layout>
  );
}

export default BuildTimetable;
