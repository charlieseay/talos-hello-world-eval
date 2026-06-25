"""
Tests for hello world deliverable.
"""
import pytest
from hello import greet

def test_default_greeting():
    """Test default greeting."""
    assert greet() == "Hello, World!"

def test_custom_greeting():
    """Test custom greeting."""
    assert greet("Talos") == "Hello, Talos!"
