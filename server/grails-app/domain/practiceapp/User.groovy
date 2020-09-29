package practiceapp

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import grails.compiler.GrailsCompileStatic
import org.grails.datastore.gorm.GormEntity

@GrailsCompileStatic
@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class User implements Serializable, GormEntity<User> {

    private static final long serialVersionUID = 1

    String username
    String password
    String email
    String firstName
    String lastName
    boolean enabled = true
    boolean accountExpired
    boolean accountLocked
    boolean passwordExpired

    Set<Role> getAuthorities() {
        (UserRole.findAllByUser(this) as List<UserRole>)*.role as Set<Role>
    }

    static constraints = {
        password nullable: false, blank: false, password: true
        username nullable: false, blank: false, unique: true
        email nullable: false, blank: false, unique: true
        firstName nullable: true, blank: true
        lastName nullable: true, blank: true
    }

    static mapping = {
	    password column: '`password`'
    }
}
