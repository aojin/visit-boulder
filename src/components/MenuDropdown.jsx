// import PropTypes from 'prop-types'
import exact from "prop-types-exact";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";

const propTypes = {};

const defaultProps = {};

function MenuDropdown() {
  const links = [
    { href: "#", label: "About Boulder" },
    { href: "#", label: "Things To Do" },
    { href: "#", label: "Outdoors" },
    { href: "#", label: "Food & Drink" },
    { href: "#", label: "Events" },
    { href: "#", label: "Travel Info" },
  ];
  return (
    <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Items>
        {links.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment}>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

MenuDropdown.propTypes = exact(propTypes);
MenuDropdown.defaultProps = defaultProps;

export default MenuDropdown;
