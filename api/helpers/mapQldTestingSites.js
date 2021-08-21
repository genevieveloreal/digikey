module.exports = function(data) {
  return {
    name: data["Facility Name"],
    address: data["Address"],
    postcode: data["Post Code"],
    openingHours: data["Opening Hours"],
    appointmentRequired: data["Booking needed"] === "Yes",
    referralRequired: data["GP referral needed"] === "Yes"
  }
}
