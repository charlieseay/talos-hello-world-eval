#!/usr/bin/env python3
"""
Simple hello world deliverable for Talos evaluation testing.
"""

def greet(name="World"):
    """Return a greeting message."""
    return f"Hello, {name}!"

if __name__ == "__main__":
    print(greet())
