import argparse
import sys

import dav_tools

from server.db import auth


def main() -> int:
    parser = argparse.ArgumentParser(description='Set a new password for an existing user.')
    parser.add_argument('username', type=str, help='Username of the user to update')
    parser.add_argument('password', type=str, help='New password to set')
    args = parser.parse_args()

    if not auth.user_exists(args.username):
        dav_tools.messages.error(f"User '{args.username}' does not exist.")
        return 1

    if not auth.change_password(args.username, args.password):
        dav_tools.messages.error(f"Failed to update password for user '{args.username}'.")
        return 1

    dav_tools.messages.success(f"Password for user '{args.username}' has been updated successfully.")
    return 0


if __name__ == '__main__':
    sys.exit(main())
