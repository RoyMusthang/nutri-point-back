import dotenv from 'dotenv'

dotenv.config()

const { env } = process

export default {
  api: {
    port: Number(env.PORT || 3001)
  }
}
