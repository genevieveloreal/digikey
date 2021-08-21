type restrictionsStructure = Record<States, Restrictions>


type States =
    "act" | "nsw" | "nt" | "qld" | "sa" | "tas" | "vic" | "wa"


type Restrictions = {
    stayAtHome: boolean
    masks: {
        indoors: boolean
        outdoors: boolean
        exercising: boolean
    }
    curfew: {
        startTime?: string
        endTime?: string
    }
    maxNumberOfPeople: {
        home: number
        weddings: number
        funerals: number
        exercising: number
    }
    socialDistancing: {
        observed: boolean
        distance: string
        squareMetrePerPerson: number
    }
    schools: {
        students: "all" | "essentialOnly" | "none"
        masks: boolean
    }
    travel: {
        maxDistance: string
        essentialOnly: boolean
    }
}
