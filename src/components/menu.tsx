import { Box, Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function MenuComponent(props) {
  const profileRef = props.profileRef
  const linksRef = props.linksRef
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
          <MenuItem value="profile" onClick={() => handleClick(profileRef)}>
            Profile
          </MenuItem>
          <MenuItem value="links" onClick={() => handleClick(linksRef)}>
            Official Links
          </MenuItem>
          <MenuItem value="covers">Covers</MenuItem>
          <MenuItem value="music">Music</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
