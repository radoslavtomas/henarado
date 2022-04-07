import { Box, Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const TimeBox = props => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      border="1px solid gray"
      minW={20}
      px={2}
      py={1}
      borderRadius="4px"
      mr={1}
    >
      <Box fontSize={20} fontWeight="600">
        {props.count}
      </Box>
      <Box fontSize={10}>{props.desc}</Box>
    </Flex>
  )
}

const Countdown = params => {
  const { t } = params
  let timerID = null

  useEffect(() => {
    timerID = timer('august 13, 2022 15:00:00')
    return () => {
      console.log('clearing interval')
      clearInterval(timerID)
    }
  }, [])

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const SECOND = 1000
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const DAY = 24 * HOUR

  /**
   * Calculates the difference between two timestamps, returns a quadruple with
   * the difference in days, hours, minutes and seconds.
   *
   * @param {number} future
   */
  const timestampDiff =
    future =>
    /** @param {number} past */
    past =>
      [DAY, HOUR, MINUTE, SECOND].map((time, index, times) => {
        const diff = future - past
        const previousTime = times[index - 1]

        return (
          Math.floor(diff / time) -
          (Math.floor(diff / previousTime) * (previousTime / time) || 0)
        )
      })

  /**
   * Start timer and set the content of the element.
   *
   * @param {string} date
   */
  const timer = date => {
    const diff = timestampDiff(Date.parse(date))

    return setInterval(() => {
      const [days, hours, minutes, seconds] = diff(Date.now())

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, SECOND)
  }

  return (
    <>
      <Flex justifyContent="center" mt={4}>
        <TimeBox count={days} desc={t.countdown.d} />
        <TimeBox count={hours} desc={t.countdown.h} />
        <TimeBox count={minutes} desc={t.countdown.m} />
        <TimeBox count={seconds} desc={t.countdown.s} />
      </Flex>
    </>
  )
}

export default Countdown
