

// Added by the Spring Security Core plugin:
// TODO: Create a secret key value for the jwt secret key
grails.plugin.springsecurity.rest.token.storage.jwt.secret = 'W9nMMioJa1oVBylAIs33hSJpquQanp37'
grails.plugin.springsecurity.userLookup.userDomainClassName = 'practiceapp.User'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'practiceapp.UserRole'
grails.plugin.springsecurity.authority.className = 'practiceapp.Role'
grails.plugin.springsecurity.controllerAnnotations.staticRules = [
	[pattern: '/',               access: ['permitAll']],
	[pattern: '/error',          access: ['permitAll']],
	[pattern: '/index',          access: ['permitAll']],
	[pattern: '/index.gsp',      access: ['permitAll']],
	[pattern: '/shutdown',       access: ['permitAll']],
	[pattern: '/assets/**',      access: ['permitAll']],
	[pattern: '/**/js/**',       access: ['permitAll']],
	[pattern: '/**/css/**',      access: ['permitAll']],
	[pattern: '/**/images/**',   access: ['permitAll']],
	[pattern: '/**/favicon.ico', access: ['permitAll']]
]

grails.plugin.springsecurity.filterChain.chainMap = [
	[pattern: '/assets/**',      filters: 'none'],
	[pattern: '/**/js/**',       filters: 'none'],
	[pattern: '/**/css/**',      filters: 'none'],
	[pattern: '/**/images/**',   filters: 'none'],
	[pattern: '/**/favicon.ico', filters: 'none'],
	[pattern: '/api/**',             filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,' +
			'-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,' +
			'-rememberMeAuthenticationFilter']
]

