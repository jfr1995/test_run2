var crowns = 300;

const dataset = [
  {
    armor_type: "Guantlet",
    armor_name: "The Hounds's Guantlets",
    value: 44,
    cost: 21
  },

  {
    armor_type: "Guantlet",
    armor_name: "G3",
    value: 3,
    cost: 17
  },
  {
    armor_type: "Guantlet",
    armor_name: "Gauntlets of Roche",
    value: 35,
    cost: 18
  },
  {
    armor_type: "Guantlet",
    armor_name: "G1",
    value: 43,
    cost: 19
  },

  {
    armor_type: "Helmet",
    armor_name: "Serpentine Cruz Headpiece",
    value: 23,
    cost: 90
  },
  {
    armor_type: "Leggings",
    armor_name: "Famed Pon Leggings",
    value: 22,
    cost: 87
  },

  {
    armor_type: "Leggings",
    armor_name: "Famed Pon Leggings",
    value: 22,
    cost: 88
  },
  {
    armor_type: "Leggings",
    armor_name: "Famed Pon Leggings",
    value: 22,
    cost: 89
  },
  {
    armor_type: "Leggings",
    armor_name: "Famed Pon Leggings",
    value: 22,
    cost: 90
  },
  {
    armor_type: "Leggings",
    armor_name: "Famed Pon Leggings",
    value: 22,
    cost: 95
  },
  {
    armor_type: "Leggings",
    armor_name: "Ursine Trousers",
    value: 18,
    cost: 78
  },

  {
    armor_type: "Helmet",
    armor_name: "Keeton Mask",
    value: 24,
    cost: 77
  },
  {
    armor_type: "Helmet",
    armor_name: "Keeton Mask",
    value: 24,
    cost: 78
  },
  {
    armor_type: "Helmet",
    armor_name: "Keeton Mask",
    value: 24,
    cost: 79
  },
  {
    armor_type: "Leggings",
    armor_name: "Wolven Shinguards",
    value: 15,
    cost: 75
  },
  {
    armor_type: "Leggings",
    armor_name: "Hansen's Breeches",
    value: 17,
    cost: 69
  },
  {
    armor_type: "Helmet",
    armor_name: "Feline Visor",
    value: 16,
    cost: 68
  },
  {
    armor_type: "Chest",
    armor_name: "Armor de Jandro",
    value: 22,
    cost: 67
  },
  {
    armor_type: "Chest",
    armor_name: "Chestpiece of Vachon",
    value: 23,
    cost: 64
  },
  {
    armor_type: "Boots",
    armor_name: "Diamond Boots",
    value: 18,
    cost: 64
  },
  {
    armor_type: "Leggings",
    armor_name: "Griffin Pants",
    value: 11,
    cost: 62
  },
  {
    armor_type: "Chest",
    armor_name: "Kaer Morhen Armor",
    value: 21,
    cost: 62
  },
  {
    armor_type: "Helmet",
    armor_name: "Ornate Helmet of Cagampan",
    value: 16,
    cost: 60
  },
  {
    armor_type: "Chest",
    armor_name: "Cured Leather Chestpiece",
    value: 20,
    cost: 59
  },
  {
    armor_type: "Leggings",
    armor_name: "Tanned Leg Protection",
    value: 15,
    cost: 59
  },
  {
    armor_type: "Chest",
    armor_name: "Smith's Plated Chestguard",
    value: 10,
    cost: 58
  },
  {
    armor_type: "Chest",
    armor_name: "Dented Plate Armor",
    value: 19,
    cost: 57
  },
  {
    armor_type: "Leggings",
    armor_name: "mantocore Braces",
    value: 12,
    cost: 56
  },
  {
    armor_type: "Chest",
    armor_name: "JewelednDrake Tunic",
    value: 19,
    cost: 55
  },
  {
    armor_type: "Chest",
    armor_name: "Ginger's Gilded Armor",
    value: 18,
    cost: 54
  },
  {
    armor_type: "Helmet",
    armor_name: "Offner Protector",
    value: 15,
    cost: 54
  },
  {
    armor_type: "Leggings",
    armor_name: "Mail Emares Leggings",
    value: 14,
    cost: 53
  },
  {
    armor_type: "Boots",
    armor_name: "Steet Boots",
    value: 14,
    cost: 52
  },
  {
    armor_type: "Boots",
    armor_name: "Tate's Spiked Cleats",
    value: 20,
    cost: 52
  },
  {
    armor_type: "Chest",
    armor_name: "Garcia Guard",
    value: 17,
    cost: 50
  },
  {
    armor_type: "Helmet",
    armor_name: "Leather Helmet",
    value: 13,
    cost: 49
  },
  {
    armor_type: "Leggings",
    armor_name: "Woven Leggings",
    value: 11,
    cost: 47
  },
  {
    armor_type: "Helmet",
    armor_name: "Siglar's Noggins Protector",
    value: 12,
    cost: 46
  },
  {
    armor_type: "Leggings",
    armor_name: "Siken Pants",
    value: 10,
    cost: 45
  },
  {
    armor_type: "Helmet",
    armor_name: "Glass Bowl",
    value: 12,
    cost: 44
  },
  {
    armor_type: "Leggings",
    armor_name: "Tattered Shorts",
    value: 13,
    cost: 42
  },
  {
    armor_type: "Boots",
    armor_name: "Leather Lunde Shoes",
    value: 7,
    cost: 35
  },
  {
    armor_type: "Boots",
    armor_name: "Cloth Shoes",
    value: 5,
    cost: 33
  }
];

// an auxillary function so the inventory can be sorted
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

// function that returns the cost of a specified armor set
function get_armor_set_cost(armor_set) {
  var cost = 0;
  armor_set.forEach(item => {
    cost += item.cost;
  });
  return cost;
}

// function that returns the total value of a specified armor set
function get_armor_set_value(armor_set) {
  var value = 0;
  armor_set.forEach(item => {
    value += item.value;
  });
  return value;
}

// function that will return armor inventory in a sorted order
const get_sorted_inventory = inventory => {
  var all_armor_types = [];
  var unique_armor_types = [];
  var sorted_inverntory = [];

  inventory.forEach(item => {
    all_armor_types.push(item.armor_type);
  });

  unique_armor_types = all_armor_types.filter(onlyUnique);

  unique_armor_types.forEach(item => {
    sorted_inverntory.push(inventory.filter(armor => armor.armor_type == item));
  });

  sorted_inverntory.forEach(item => {
    item.sort(function(a, b) {
      if (a.value == b.value) {
        return b.cost - a.cost;
      }
      return a.value - b.value;
    });
  });

  return sorted_inverntory;
};

const get_armor_set = inventory => {
  var armor_set = [];
  inventory.forEach(item => {
    armor_set.push(item.pop());
  });

  return armor_set;
};

/*
  filter lists to remove pricer and less value armor

*/
const trim_inventrory = (armor_piece, inventory) => {
  var index = 0;
  var count = 0;

  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].length > 0) {
      if (inventory[i][0].armor_type == armor_piece.armor_type) {
        index = i;
        break;
      }
    }
  }

  for (var j = 0; j < inventory[index].length; j++) {
    if (armor_piece.cost <= inventory[index][j].cost) {
      count++;
    }
  }

  for (var j = 0; j < count; j++) {
    inventory[index].pop();
  }
};

// select and swap armor piece

const reduce_armor_cost = (armor_set, inventory) => {
  armor_set.forEach(item => {
    trim_inventrory(item, inventory);
  });

  var index = 0;

  var diff = 1000000; //value_diff / cost_diff;

  for (var i = 0; i < armor_set.length; i++) {
    if (inventory[i].length > 0) {
      if (
        (armor_set[i].value - inventory[i][inventory[i].length - 1].value) /
          (armor_set[i].cost - inventory[i][inventory[i].length - 1].cost) <
        diff
      ) {
        diff =
          (armor_set[i].value - inventory[i][inventory[i].length - 1].value) /
          (armor_set[i].cost - inventory[i][inventory[i].length - 1].cost);
        index = i;
      }
    }
  }

  var temp = inventory[index].pop();

  armor_set[index].armor_name = temp.armor_name;
  armor_set[index].armor_type = temp.armor_type;
  armor_set[index].value = temp.value;
  armor_set[index].cost = temp.cost;
};

// function that returns the best possible armor with the available crowns
const main = (crowns, current_inventory) => {
  // first we get the
  var new_inventory = get_sorted_inventory(current_inventory);
  var armor_set = get_armor_set(new_inventory);
  var total_cost = get_armor_set_cost(armor_set);

  if (total_cost <= crowns) {
    return armor_set;
  }

  while (total_cost >= crowns) {
    console.log(total_cost);
    reduce_armor_cost(armor_set, new_inventory);
    total_cost = get_armor_set_cost(armor_set);
    console.log(total_cost);
  }
  return armor_set;
};

var final_armor_set = main(crowns, dataset);
var final_cost = get_armor_set_cost(final_armor_set);
var final_value = get_armor_set_value(final_armor_set);
console.log(final_armor_set);

var armor_cost = document.createElement("div");
var armor_val = document.createElement("div");
armor_cost.innerHTML = "Total Armor Cost: " + final_cost;
armor_val.innerHTML = "Total Armor Value: " + final_value;
document.getElementById("armor-info").appendChild(armor_cost);
document.getElementById("armor-info").appendChild(armor_val);

final_armor_set.forEach(item => {
  var container = document.createElement("div");
  container.className = "card-container";
  var image = document.createElement("img");
  image.src = "images/medallion.jpg";
  image.height = "200";
  image.width = "100";
  var info = document.createElement("div");
  info.className = "info-container";
  var name = document.createElement("div");
  name.innerHTML = item.armor_name;
  name.className = "name-container";
  var type = document.createElement("div");
  type.innerHTML = item.armor_type;
  var cost = document.createElement("div");
  cost.innerHTML = "Armor Cost: " + item.cost;
  var value = document.createElement("div");
  value.className = "val-container";

  value.innerHTML = item.value;

  info.appendChild(name);
  info.appendChild(type);
  info.appendChild(cost);

  container.appendChild(value);
  container.appendChild(image);
  container.appendChild(info);

  document.getElementById("root").appendChild(container);
});
