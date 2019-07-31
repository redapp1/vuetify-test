<template>
   <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
  
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
  
        <v-list-group
          prepend-icon="account_circle"
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>
            <v-list-item
              link
            >
              <v-list-item-title text="gfdf"></v-list-item-title>
              <v-list-item-icon>
                <v-icon text="person"></v-icon>
              </v-list-item-icon>
            </v-list-item>
  
         
        </v-list-group>
      </v-list>
    </v-card>
</template>

<script>
export default {
    
}
</script>
