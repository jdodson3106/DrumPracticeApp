package practiceapp

class PracticeSession {

    User user
    double begin = 0
    double end = 0
    Date startTime
    Date endTime

    Date dateCreated
    Date lastUpdated

    static belongsTo = [user: User]

    static hasMany = [exercise: Exercise]

    static constraints = {
        user nullable: false, blank: false
        exercise nullable: false, blank: false
        begin nullable: false, blank: false
        end nullable: false, blank: false
        startTime nullable: false
        endTime nullable: false
    }
}
