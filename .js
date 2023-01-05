#include <iostream>
#include <vector>

// Forward declarations
class Weapon;
class Enemy;

class Player
{
private:
    int health;
    std::vector<Weapon> weapons;
    Weapon* activeWeapon;

public:
    Player() : health(100) {}

    void takeDamage(int damage)
    {
        health -= damage;
        if (health <= 0)
        {
            std::cout << "You have been defeated!" << std::endl;
        }
    }

    void attack(Enemy& enemy)
    {
        activeWeapon->fire(enemy);
    }
};

class Weapon
{
private:
    int damage;

public:
    Weapon(int damage) : damage(damage) {}

    void fire(Enemy& enemy)
    {
        enemy.takeDamage(damage);
    }
};

class Enemy
{
private:
    int health;

public:
    Enemy(int health) : health(health) {}

    void takeDamage(int damage)
    {
        health -= damage;
        if (health <= 0)
        {
            std::cout << "The enemy has been defeated!" << std::endl;
        }
    }
};

int main()
{
    Player player;
    Enemy enemy(100);

    Weapon gun(20);
    player.weapons.push_back(gun);
    player.activeWeapon = &player.weapons[0];

    player.attack(enemy);

    return 0;
}
