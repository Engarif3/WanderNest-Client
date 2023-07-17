
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiModernCity,
  GiVillage
} from 'react-icons/gi'
import { TbBeach, TbWindmill } from 'react-icons/tb'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'
import { MdPool } from 'react-icons/md'

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: TbWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'Modern',
    icon: GiModernCity,
    description: 'This property is modern!',
  },
  {
    label: 'Countryside',
    icon: GiVillage,
    description: 'This property is in the countryside!',
  },
  {
    label: 'Pools',
    icon: MdPool,
    description: 'This is property has a beautiful pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is an ancient castle!',
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property offers camping activities!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in arctic environment!',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn!',
  },
  {
    label: 'Luxe',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!',
  },
]