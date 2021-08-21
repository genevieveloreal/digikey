module.exports = {
  qld: {
    stayAtHome: false,
    masks: {
      indoors: true,
      outdoors: false,
      exercising: false,
    },
    curfew: {
    },
    maxNumberOfPeople: {
      home: 30,
      weddings: 100,
      funerals: 100,
      exercising: 100,
    },
    socialDistancing: {
      observed: true,
      distance: '1.5m',
      squareMetrePerPerson: 4
    },
    schools: {
      students: "all",
      masks: false
    },
    travel: {
      maxDistance: undefined,
      essentialOnly: false
    }
  },
  nsw: {
    stayAtHome: true,
    masks: {
      indoors: true,
      outdoors: true,
      exercising: true,
    },
    curfew: {
      startTime: '21:00',
      endTime: '05:00'
    },
    maxNumberOfPeople: {
      home: 1,
      weddings: 0,
      funerals: 10,
      exercising: 1,
    },
    socialDistancing: {
      observed: true,
      distance: '1.5m',
      squareMetrePerPerson: 4
    },
    schools: {
      students: "essentialOnly",
      masks: true
    },
    travel: {
      maxDistance: '5km',
      essentialOnly: true
    }
  },
  act: {
    stayAtHome: false,
    masks: {
      indoors: true,
      outdoors: false,
      exercising: false,
    },
    curfew: {
    },
    maxNumberOfPeople: {
      home: 10,
      weddings: 20,
      funerals: 20,
      exercising: 100,
    },
    socialDistancing: {
      observed: true,
      distance: '1.5m',
      squareMetrePerPerson: 4
    },
    schools: {
      students: "all",
      masks: false
    },
    travel: {
      maxDistance: '10km',
      essentialOnly: false
    }
  },
  vic: {
    stayAtHome: true,
    masks: {
      indoors: true,
      outdoors: true,
      exercising: true,
    },
    curfew: {
      startTime: '21:00',
      endTime: '05:00'
    },
    maxNumberOfPeople: {
      home: 1,
      weddings: 0,
      funerals: 10,
      exercising: 1,
    },
    socialDistancing: {
      observed: true,
      distance: '1.5m',
      squareMetrePerPerson: 4
    },
    schools: {
      students: "essentialOnly",
      masks: true
    },
    travel: {
      maxDistance: '5km',
      essentialOnly: true
    }
  },
  tas: {
    stayAtHome: false,
    masks: {
      indoors: true,
      outdoors: false,
      exercising: false,
    },
    curfew: {
    },
    maxNumberOfPeople: {
      home: 30,
      weddings: 100,
      funerals: 100,
      exercising: 100,
    },
    socialDistancing: {
      observed: true,
      distance: '1.5m',
      squareMetrePerPerson: 4
    },
    schools: {
      students: "all",
      masks: false
    },
    travel: {
      maxDistance: undefined,
      essentialOnly: false
    }
  },
  wa: {
    stayAtHome: false,
    masks: {
      indoors: true,
      outdoors: false,
      exercising: false,
    },
    curfew: {
    },
    maxNumberOfPeople: {
      home: 30,
      weddings: 100,
      funerals: 100,
      exercising: 100,
    },
    socialDistancing: {
      observed: true,
      distance: '1.5m',
      squareMetrePerPerson: 4
    },
    schools: {
      students: "all",
      masks: false
    },
    travel: {
      maxDistance: undefined,
      essentialOnly: false
    }
  },
  nt: {
    stayAtHome: false,
    masks: {
      indoors: true,
      outdoors: false,
      exercising: false,
    },
    curfew: {
    },
    maxNumberOfPeople: {
      home: 30,
      weddings: 100,
      funerals: 100,
      exercising: 100,
    },
    socialDistancing: {
      observed: true,
      distance: '1.5m',
      squareMetrePerPerson: 4
    },
    schools: {
      students: "all",
      masks: false
    },
    travel: {
      maxDistance: undefined,
      essentialOnly: false
    }
  },
  sa: {
    stayAtHome: false,
    masks: {
      indoors: true,
      outdoors: false,
      exercising: false,
    },
    curfew: {
    },
    maxNumberOfPeople: {
      home: 20,
      weddings: 50,
      funerals: 50,
      exercising: 100,
    },
    socialDistancing: {
      observed: true,
      distance: '1.5m',
      squareMetrePerPerson: 4
    },
    schools: {
      students: "all",
      masks: false
    },
    travel: {
      maxDistance: undefined,
      essentialOnly: false
    }
  },
}
