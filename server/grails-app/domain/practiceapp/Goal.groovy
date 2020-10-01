package practiceapp

import groovy.transform.ToString
import org.grails.datastore.gorm.GormEntity

@ToString
class Goal implements Serializable, GormEntity<Goal> {

    String title
    String description
    Date achieveDate
    Date startDate

    Date dateCreated
    Date lastUpdated

    static constraints = {
    }
}
