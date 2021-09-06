
import { TypePolicies } from '@apollo/client'

export const typePolicies = (): TypePolicies => {
    return {
        Person: {
            keyFields: ['UUID'],
            fields: {
                birthday: {
                    read(birthday) {
                        return new Date(birthday)
                    }
                },
                
                age: {
                    read(_, { readField }) {
                        const birthday = readField('birthday') as Date
                        return birthDayToAge(birthday)
                    }
                },
            }
        }
    }
}

function birthDayToAge(date: Date): number { 
    var diffDate = new Date(Date.now() - date.getTime()); 
    return Math.abs(diffDate.getUTCFullYear() - 1970);
}
