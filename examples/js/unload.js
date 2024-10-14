window.addEventListener('beforeunload', function (e) {
    var uid = localStorage.getItem('GUID');
    const data = {
      exhibition_ID: 5,
      visitor_guid: uid,
      is_closed: 1
    };
    // Convert data to a JSON string
    const dataString = JSON.stringify(data);
    // Use navigator.sendBeacon to send data to the server
    const result = navigator.sendBeacon(
      'https://www.marketcentral.in/rest/virtualExpo/general/UpdateChatStatus',
      dataString
    );

    // Log the result of the sendBeacon call
    if (result) {
      console.log('Data successfully queued for sending.');
    } else {
      console.log('Failed to queue data for sending.');
    }
  });