package practiceapp

import org.grails.datastore.gorm.GormEntity

class Exercise implements Serializable, GormEntity<Exercise>{

    PracticeSession session
    String name
    String goal
    Date completionTargetDate
    boolean complete = false

    static belongsTo = [session: PracticeSession]

    static constraints = {
    }
}
