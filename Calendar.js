import * as Calendar from "expo-calendar";

// define your const

export const addEventToCalendar = async (
  title,
  startDate,
  endDate,
  location
) => {
  try {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === "granted") {
      //console.log('Permissions granted. Fetching available calendars...')
      const calendars = await Calendar.getCalendarsAsync(
        Calendar.EntityTypes.EVENT
      );
      const defaultCalendar =
        calendars.find((calendar) => calendar.isPrimary) || calendars[0];
      if (defaultCalendar) {
        const eventConfig = {
          title,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          allDay: false,
          location,
        };
        //console.log('eventConfig:', eventConfig)
        const eventId = await Calendar.createEventAsync(
          defaultCalendar.id,
          eventConfig
        );
        //console.log(eventId)
        Alert.alert("Success", "Event added to your calendar");
      } else {
        console.warn("No available calendars found.");
      }
    } else {
      console.warn("Calendar permission not granted.");
    }
  } catch (error) {
    console.warn(error);
  }
};

// In your return:
{
  /* <TouchableOpacity
style={[styles.cardStatusButton, styles.cardaddcalButton]}
onPress={() =>
addEventToCalendar(
`Service at ${store.name}`,
new Date(start_time ?? ''),
new Date(end_time ?? ''),
`${store.address.street}, ${store.address.street2}, ${store.address.city}, ${store.address.state} ${store.address.postcode}`
)
}
></TouchableOpacity> */
}
