package practiceapp

import org.grails.datastore.gorm.GormEntity

class Bpm implements Serializable, GormEntity<Bpm> {

    Exercise exercise

    static constraints = {
    }
}
