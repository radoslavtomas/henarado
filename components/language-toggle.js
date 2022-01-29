import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'
import { Box, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Flag = ({ ...props }) => {
    let lang, flag, desc
    if(props.locale === 'en') {
        lang = 'sk'
        flag = 'sk'
        desc = 'Slovak flag'
    } else {
        lang = 'en'
        flag = 'uk'
        desc = 'UK flag'
    }

    return (
        <NextLink href="/" locale={lang}>
        <Image
            borderColor="whiteAlpha.800"
            borderWidth={1}
            borderStyle="solid"
            width="40px"
            display="inline-block"
            borderRadius="md"
            cursor={'pointer'}
            src={`/images/flag_${flag}.png`}
            alt={desc}
        />
        </NextLink>
    )
}

const LanguageToggle = () => {
    const { locale } = useRouter()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={locale}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Box p={0,2}>
          <Flag locale={locale} />
        </Box>
      </motion.div>
    </AnimatePresence>
  )
}

export default LanguageToggle
