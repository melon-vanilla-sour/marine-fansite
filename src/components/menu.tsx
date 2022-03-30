import { Box, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function MenuComponent(props) {
  const refs = props.refs
  const handleClick = props.handleClick

  return (
    <Box position="fixed" bottom="20px" right={['16px', '84px']}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          borderRadius="full"
        />
        <MenuList>
          <MenuItem value="profile" onClick={() => handleClick(refs.current[0])}>
            Profile
          </MenuItem>
          <MenuItem value="streaming" onClick={() => handleClick(refs.current[1])}>
            Streaming
          </MenuItem>
          <MenuItem value="music" onClick={() => handleClick(refs.current[2])}>
            Music
          </MenuItem>
          <MenuItem value="links" onClick={() => handleClick(refs.current[3])}>
            Official Links
          </MenuItem>
          <MenuItem value="timeline" onClick={() => handleClick(refs.current[4])}>
            Timeline
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
