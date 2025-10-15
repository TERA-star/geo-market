#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from django.db import connections

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'geo_market_be.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    if len(sys.argv) > 1 and sys.argv[1] == 'runserver' and len(sys.argv) == 2:
        # If running the server without port specification, use port 5000
        sys.argv.append('0.0.0.0:5000')
    print("success!")
    
    db_conn = connections['default']
    db_conn.ensure_connection()
    print("MongoDB connected successfully!")
    
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()