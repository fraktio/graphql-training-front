
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
                }
            }
        }
    }
}