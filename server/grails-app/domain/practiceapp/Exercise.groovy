package practiceapp

class Exercise {

    PracticeSession session
    String name
    String goal
    Date completionTargetDate
    boolean complete = false

    static belongsTo = [session: PracticeSession]

    static constraints = {
    }
}
