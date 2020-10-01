package practiceapp

import org.grails.datastore.gorm.GormEntity

class SessionDetails implements Serializable, GormEntity<SessionDetails> {

    Bpm bpm
    String name
    int completionRaking
    String ideas

    static constraints = {
    }
}
