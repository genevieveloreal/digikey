module.exports = function(data) {
  return {
    name: data["Site_name"],
    address: data["Address"],
    postcode: data["Postcode"],
    openingHours: data["Service_Availability"],
    appointmentRequired: data["Requirements"] === "Appointment required.",
    referralRequired: data["Requirements"] === "GP referral required."
  }
}
